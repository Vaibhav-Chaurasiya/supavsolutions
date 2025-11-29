import * as React from "react";
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

/** ✅ Configuration */
const TOAST_LIMIT = 3; // show up to 3 toasts at a time
const TOAST_REMOVE_DELAY = 5000; // auto remove after 5 seconds

/** 🔹 Toast Type Definition */
type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

const ACTIONS = {
  ADD: "ADD_TOAST",
  UPDATE: "UPDATE_TOAST",
  DISMISS: "DISMISS_TOAST",
  REMOVE: "REMOVE_TOAST",
} as const;

type ActionType = typeof ACTIONS;

type Action =
  | { type: ActionType["ADD"]; toast: ToasterToast }
  | { type: ActionType["UPDATE"]; toast: Partial<ToasterToast> }
  | { type: ActionType["DISMISS"]; toastId?: string }
  | { type: ActionType["REMOVE"]; toastId?: string };

/** 🔹 Toast State */
interface State {
  toasts: ToasterToast[];
}

/** 🔹 ID Generator */
let toastCounter = 0;
const genId = () => (++toastCounter).toString();

/** 🔹 Timeout Management */
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: ACTIONS.REMOVE, toastId });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/** 🔹 Reducer Logic */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case ACTIONS.UPDATE:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case ACTIONS.DISMISS:
      const toastId = action.toastId;
      if (toastId) addToRemoveQueue(toastId);
      else state.toasts.forEach((t) => addToRemoveQueue(t.id));

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          toastId && t.id !== toastId ? t : { ...t, open: false }
        ),
      };

    case ACTIONS.REMOVE:
      return {
        ...state,
        toasts: action.toastId
          ? state.toasts.filter((t) => t.id !== action.toastId)
          : [],
      };

    default:
      return state;
  }
};

/** 🔹 Global State & Listeners */
const listeners = new Set<(state: State) => void>();
let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

/** 🔹 Toast Functions */
type Toast = Omit<ToasterToast, "id">;

export function toast(props: Toast) {
  const id = genId();

  const dismiss = () => dispatch({ type: ACTIONS.DISMISS, toastId: id });
  const update = (newProps: Partial<ToasterToast>) =>
    dispatch({ type: ACTIONS.UPDATE, toast: { ...newProps, id } });

  dispatch({
    type: ACTIONS.ADD,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update };
}

/** 🔹 React Hook */
export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.add(setState);
    return () => listeners.delete(setState);
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) =>
      dispatch({ type: ACTIONS.DISMISS, toastId }),
  };
}

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-indigo-600 to-[#0A0B10] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-indigo-400/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1.5s' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to <span className="text-gradient">grow your business online</span> with Supav Solutions?
          </h2>
          <p
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            From stunning websites to high-performing e-commerce stores and digital marketing that drives real results —
            Supav Solutions helps your brand reach new heights.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Button
              size="lg"
              className="bg-indigo-500 hover:bg-indigo-700 text-white px-8 py-6"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/5 py-6"
            >
              View Our Work
            </Button>
          </div>

          <p
            className="mt-6 text-sm text-gray-400 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            No hidden charges. 100% transparency. Let’s build your digital success story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;

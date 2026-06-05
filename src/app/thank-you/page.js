import Link from 'next/link';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import ThankYouGuard from '@/components/cart/ThankYouGuard';
import OrderNumber from '@/components/cart/OrderNumber';

export const metadata = {
  title: 'Thank You | BlushBerry',
  description: 'Thank you for your purchase at BlushBerry.',
};

export default function ThankYouPage() {
  // Order number is generated on the client by `OrderNumber` to avoid
  // impure Math.random() calls during server render.

  return (
    <ThankYouGuard>
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-20">
        <div className="max-w-2xl w-full bg-card shadow-2xl shadow-primary/5 rounded-3xl p-8 md:p-12 text-center border border-border/50 transition-all">
          
          <div className="flex justify-center mb-8 relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-150 opacity-70 group-hover:scale-175 transition-transform duration-500" />
              <div className="relative bg-primary/10 text-primary p-5 rounded-full border border-primary/20 flex items-center justify-center">
                <CheckCircle className="w-12 h-12" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
            Thank you for your order!
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto leading-relaxed">
            We've received your order and are getting it ready to be shipped. 
            A confirmation email has been sent to your inbox.
          </p>
          
          <div className="bg-muted/30 rounded-2xl p-6 mb-10 max-w-sm mx-auto border border-border/50 hover:border-primary/20 transition-colors">
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-widest font-medium">
              Order number
            </p>
            <OrderNumber />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/shop" 
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all font-medium hover:shadow-lg hover:shadow-primary/25 active:scale-95"
            >
              <ShoppingBag className="w-5 h-5" />
              Continue Shopping
            </Link>
            
            <Link 
              href="/" 
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-full hover:bg-secondary/80 transition-all font-medium border border-border/50 active:scale-95"
            >
              Back to Home
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </ThankYouGuard>
  );
}

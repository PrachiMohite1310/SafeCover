import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001529] text-white border-t border-slate-800">
      <div className="max-w-[1800px] mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#001529]" />
            </div>
            <div>
              <div className="text-white text-sm leading-tight tracking-wide">SafeCover</div>
              <div className="text-slate-400 text-xs leading-tight">Insurance Advisory</div>
            </div>
          </div>

          {/* Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-slate-400 text-sm">
            <p>© 2024 SafeCover Insurance Advisory. All rights reserved.</p>
            <span className="hidden md:block">|</span>
            <p>Licensed in all 50 states | A.M. Best Rated Carriers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
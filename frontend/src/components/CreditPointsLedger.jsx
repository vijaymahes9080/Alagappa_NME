import React from 'react';
import { Award, DollarSign, CheckCircle2, TrendingUp } from 'lucide-react';

export default function CreditPointsLedger({ student }) {
  return (
    <div className="bg-gradient-to-r from-alagappa-darkblue via-alagappa-blue to-slate-900 rounded-3xl p-6 text-white shadow-lg space-y-4 border border-alagappa-gold/30">
      <div className="flex justify-between items-center">
        <h4 className="font-serif font-bold text-base flex items-center gap-2">
          <Award className="w-5 h-5 text-alagappa-gold" />
          <span>Academic Credit & Fee Waiver Ledger</span>
        </h4>
        <span className="bg-alagappa-gold/20 text-alagappa-gold font-bold text-xs px-3 py-1 rounded-full border border-alagappa-gold/40">
          State University Subsidy Active
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1">
          <p className="text-slate-300">Earned NME Credits</p>
          <p className="text-2xl font-bold text-alagappa-gold">6 / 6 Credits</p>
          <p className="text-[10px] text-emerald-400 font-semibold">100% Requirement Fulfilled</p>
        </div>

        <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1">
          <p className="text-slate-300">NME Tuition Waiver</p>
          <p className="text-2xl font-bold text-emerald-400">₹0 (100% Waived)</p>
          <p className="text-[10px] text-slate-300">Govt. of Tamil Nadu Higher Education Grant</p>
        </div>

        <div className="bg-white/10 p-4 rounded-2xl border border-white/10 space-y-1">
          <p className="text-slate-300">CGPA Multiplier Bonus</p>
          <p className="text-2xl font-bold text-sky-400">+0.25 CGPA</p>
          <p className="text-[10px] text-slate-300">Honors Degree Qualification</p>
        </div>
      </div>
    </div>
  );
}

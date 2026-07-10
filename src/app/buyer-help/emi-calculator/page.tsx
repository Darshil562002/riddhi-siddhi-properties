"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calculator } from "lucide-react";

function calculateEMI(principal: number, rate: number, months: number) {
  if (rate === 0) return { emi: principal / months, totalPayment: principal, totalInterest: 0 };
  const r = rate / 12 / 100;
  const emi = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;
  return { emi, totalPayment, totalInterest };
}

function formatINR(n: number) {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);
  const [result, setResult] = useState({ emi: 0, totalPayment: 0, totalInterest: 0 });

  useEffect(() => {
    setResult(calculateEMI(loanAmount, interestRate, tenureYears * 12));
  }, [loanAmount, interestRate, tenureYears]);

  const interestPercent = result.totalPayment > 0 ? (result.totalInterest / result.totalPayment) * 100 : 0;
  const principalPercent = 100 - interestPercent;

  return (
    <main>
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/buyer-help">Buyer Help</Link></li>
            <li className="active">EMI Calculator</li>
          </ol>
        </div>
      </nav>

      <section className="page-hero" aria-label="EMI Calculator hero">
        <div className="container">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-[0.75rem] font-semibold tracking-widest uppercase mb-6">Planning Tool</span>
          <h1>Home Loan EMI Calculator</h1>
          <p>Plan your monthly payments instantly. No registration needed — calculate EMI, total interest, and loan breakdown in seconds.</p>
        </div>
      </section>

      <section className="py-16 bg-ivory" aria-label="EMI Calculator">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Inputs */}
            <div className="bg-white border border-border-lt rounded-2xl p-8 shadow-sm">
              <h2 className="text-[1.4rem] mb-7 flex items-center gap-2"><Calculator size={22} className="text-forest" /> Loan Details</h2>

              {/* Loan Amount */}
              <div className="form-group">
                <div className="flex justify-between mb-2">
                  <label htmlFor="emi-amount" className="form-label !mb-0">Loan Amount</label>
                  <span className="font-serif font-bold text-forest text-[1.1rem]">{formatINR(loanAmount)}</span>
                </div>
                <input id="emi-amount" type="range" min={500000} max={10000000} step={50000} value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} className="w-full accent-forest" aria-label="Loan amount slider" />
                <div className="flex justify-between text-[0.72rem] text-text-light mt-1"><span>₹5 L</span><span>₹1 Cr</span></div>
              </div>

              {/* Interest Rate */}
              <div className="form-group">
                <div className="flex justify-between mb-2">
                  <label htmlFor="emi-rate" className="form-label !mb-0">Interest Rate (p.a.)</label>
                  <span className="font-serif font-bold text-forest text-[1.1rem]">{interestRate.toFixed(1)}%</span>
                </div>
                <input id="emi-rate" type="range" min={6} max={15} step={0.1} value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} className="w-full accent-forest" aria-label="Interest rate slider" />
                <div className="flex justify-between text-[0.72rem] text-text-light mt-1"><span>6%</span><span>15%</span></div>
              </div>

              {/* Tenure */}
              <div className="form-group">
                <div className="flex justify-between mb-2">
                  <label htmlFor="emi-tenure" className="form-label !mb-0">Loan Tenure</label>
                  <span className="font-serif font-bold text-forest text-[1.1rem]">{tenureYears} years</span>
                </div>
                <input id="emi-tenure" type="range" min={5} max={30} step={1} value={tenureYears} onChange={e => setTenureYears(Number(e.target.value))} className="w-full accent-forest" aria-label="Loan tenure slider" />
                <div className="flex justify-between text-[0.72rem] text-text-light mt-1"><span>5 yrs</span><span>30 yrs</span></div>
              </div>

              {/* Quick presets */}
              <div className="mt-2">
                <p className="text-[0.78rem] text-text-light mb-2">Quick presets:</p>
                <div className="flex flex-wrap gap-2">
                  {[{ label: "₹13.32L", amount: 1332000, rate: 8.5, tenure: 15 }, { label: "₹25L", amount: 2500000, rate: 8.5, tenure: 20 }, { label: "₹50L", amount: 5000000, rate: 9.0, tenure: 20 }].map(p => (
                    <button key={p.label} onClick={() => { setLoanAmount(p.amount); setInterestRate(p.rate); setTenureYears(p.tenure); }} className="btn btn-outline btn-sm text-[0.78rem]">{p.label}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-5">
              <div className="bg-forest rounded-2xl p-8 text-white text-center">
                <div className="text-white/65 text-[0.82rem] uppercase tracking-wider mb-1">Monthly EMI</div>
                <div className="font-serif text-[3.5rem] font-bold text-white leading-none mb-1">{formatINR(result.emi)}</div>
                <div className="text-white/55 text-[0.82rem]">per month for {tenureYears} years</div>
              </div>

              {/* Expandable Breakdown Details */}
              <details className="group border border-border-lt rounded-xl overflow-hidden bg-white mt-5">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-[0.95rem] font-semibold text-dark list-none outline-none select-none">
                  View Detailed Breakdown
                  <svg className="w-5 h-5 text-forest transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                
                <div className="px-5 pb-5 space-y-5 border-t border-border-lt/50 pt-5 mt-1">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Total Loan Amount", value: formatINR(loanAmount), sub: "Principal" },
                      { label: "Total Interest", value: formatINR(result.totalInterest), sub: "Cost of borrowing" },
                      { label: "Total Payment", value: formatINR(result.totalPayment), sub: "Principal + Interest" },
                      { label: "Interest %", value: `${interestPercent.toFixed(1)}%`, sub: "of total payment" },
                    ].map(s => (
                      <div key={s.label} className="bg-warm-white border border-border-lt/50 rounded-xl p-4 text-center">
                        <div className="text-[0.72rem] text-text-light font-semibold uppercase tracking-wider mb-1">{s.label}</div>
                        <div className="font-serif text-[1.3rem] font-bold text-dark">{s.value}</div>
                        <div className="text-[0.72rem] text-text-light">{s.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Breakdown bar */}
                  <div className="bg-warm-white border border-border-lt/50 rounded-xl p-4">
                    <div className="text-[0.82rem] font-semibold mb-3">Payment Breakdown</div>
                    <div className="h-4 rounded-full overflow-hidden flex">
                      <div className="bg-forest transition-all duration-500" style={{ width: `${principalPercent}%` }} />
                      <div className="bg-gold transition-all duration-500" style={{ width: `${interestPercent}%` }} />
                    </div>
                    <div className="flex items-center gap-6 mt-3 text-[0.78rem]">
                      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-forest inline-block" /> Principal ({principalPercent.toFixed(1)}%)</div>
                      <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-gold inline-block" /> Interest ({interestPercent.toFixed(1)}%)</div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[0.78rem] text-text-light mt-8 max-w-lg mx-auto">
            *This calculator provides estimates for planning purposes only. Actual EMI may vary based on your bank&apos;s calculation method, processing fees, and applicable taxes. Contact your bank for exact figures.
          </p>
        </div>
      </section>
    </main>
  );
}

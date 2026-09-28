import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DONATION_PACKAGES, BANK_ACCOUNTS } from '../data/campaignData';
import {
  X,
  ShieldCheck,
  Lock,
  QrCode,
  CreditCard,
  Building,
  CheckCircle,
  Copy,
  Check,
  Heart,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  FileCheck
} from 'lucide-react';

interface SecurePaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackageId?: string;
  onDonationSuccess: (donorData: {
    name: string;
    amount: number;
    packageType: string;
    message?: string;
    isAnonymous: boolean;
    referenceId: string;
    paymentMethod: string;
    email: string;
    phone: string;
    date: string;
  }) => void;
}

const MALAYSIAN_BANKS = [
  { id: 'mbb', name: 'Maybank2u', code: 'MBB', popular: true },
  { id: 'cimb', name: 'CIMB Clicks', code: 'CIMB', popular: true },
  { id: 'bimb', name: 'Bank Islam', code: 'BIMB', popular: true },
  { id: 'rhb', name: 'RHB Now', code: 'RHB', popular: true },
  { id: 'pbb', name: 'Public Bank', code: 'PBB', popular: true },
  { id: 'hlb', name: 'Hong Leong Connect', code: 'HLB' },
  { id: 'ambank', name: 'AmOnline', code: 'AMB' },
  { id: 'muamalat', name: 'Bank Muamalat', code: 'BMMB' },
  { id: 'bsn', name: 'BSN (MyBSN)', code: 'BSN' },
  { id: 'affin', name: 'AffinAlways', code: 'ABB' },
];

export const SecurePaymentModal: React.FC<SecurePaymentModalProps> = ({
  isOpen,
  onClose,
  initialPackageId,
  onDonationSuccess,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1); // 1: Amount, 2: Info, 3: Payment, 4: Processing
  const [selectedPackageId, setSelectedPackageId] = useState<string>(initialPackageId || 'pkg-infaq-ikhlas');
  const [customAmount, setCustomAmount] = useState<number>(100);
  
  // Donor details
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Payment details
  const [paymentMethod, setPaymentMethod] = useState<'fpx' | 'duitnow' | 'card' | 'bank_transfer'>('fpx');
  const [selectedBank, setSelectedBank] = useState('mbb');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [copiedBankIndex, setCopiedBankIndex] = useState<number | null>(null);
  const [uploadedReceipt, setUploadedReceipt] = useState<string | null>(null);

  if (!isOpen) return null;

  // Compute final amount
  const selectedPkg = DONATION_PACKAGES.find((p) => p.id === selectedPackageId);
  const finalAmount = selectedPackageId === 'pkg-custom' ? customAmount : (selectedPkg?.amount || 100);

  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    const pkg = DONATION_PACKAGES.find((p) => p.id === pkgId);
    if (pkg && pkg.id !== 'pkg-custom') {
      setCustomAmount(pkg.amount);
    }
  };

  const handleCopyAcc = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedBankIndex(index);
    setTimeout(() => setCopiedBankIndex(null), 2500);
  };

  const handleProcessPayment = () => {
    setStep(4); // Processing

    setTimeout(() => {
      // Trigger celebratory confetti
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#002B66', '#F59E0B', '#DC2626', '#10B981'],
      });

      const refId = `SMST-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;
      const packageName = selectedPkg ? selectedPkg.name : 'Infaq Khas';

      onDonationSuccess({
        name: isAnonymous ? 'Hamba Allah' : (name.trim() || 'Hamba Allah'),
        amount: finalAmount,
        packageType: packageName,
        message: message.trim() || undefined,
        isAnonymous,
        referenceId: refId,
        paymentMethod: paymentMethod.toUpperCase(),
        email: email.trim(),
        phone: phone.trim(),
        date: 'Baru sebentar tadi',
      });

      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 my-auto">
        {/* Header */}
        <div className="bg-[#002B66] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10 text-amber-300">
              <Lock size={18} />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg leading-tight">
                Portal Sumbangan Selamat SEMESTA
              </h3>
              <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5">
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>256-Bit SSL Enkripsi Rasmi · ASTA Tradition</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Progress Dots */}
        {step < 4 && (
          <div className="bg-slate-100 px-6 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
            <div className={`flex items-center gap-1.5 ${step === 1 ? 'font-bold text-[#002B66]' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? 'bg-[#002B66] text-white' : 'bg-slate-300 text-slate-700'}`}>1</span>
              <span>Pilih Pakej</span>
            </div>
            <span className="text-slate-300">/</span>
            <div className={`flex items-center gap-1.5 ${step === 2 ? 'font-bold text-[#002B66]' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-[#002B66] text-white' : 'bg-slate-300 text-slate-700'}`}>2</span>
              <span>Maklumat</span>
            </div>
            <span className="text-slate-300">/</span>
            <div className={`flex items-center gap-1.5 ${step === 3 ? 'font-bold text-[#002B66]' : ''}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-[#002B66] text-white' : 'bg-slate-300 text-slate-700'}`}>3</span>
              <span>Pembayaran</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: Select Amount / Package */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Pilih Pakej Sumbangan Anda
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {DONATION_PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => handleSelectPackage(pkg.id)}
                      className={`p-3 rounded-xl border text-left transition-all relative ${
                        selectedPackageId === pkg.id
                          ? 'border-amber-500 bg-amber-50/70 ring-2 ring-amber-400/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-slate-900">{pkg.name}</span>
                        {pkg.badge && (
                          <span className="text-[9px] bg-amber-500 text-slate-950 font-extrabold px-1.5 py-0.5 rounded">
                            {pkg.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-base font-black text-[#002B66] font-mono mt-1">
                        RM {pkg.amount.toLocaleString('ms-MY')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom amount input if custom package or direct adjustment */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  Atau Tetapkan Amaun Pilihan Anda Sendiri (RM):
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-slate-500 text-sm">
                    RM
                  </span>
                  <input
                    type="number"
                    min="10"
                    step="10"
                    value={customAmount}
                    onChange={(e) => {
                      setSelectedPackageId('pkg-custom');
                      setCustomAmount(Math.max(1, Number(e.target.value)));
                    }}
                    className="w-full pl-12 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg font-mono font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Contoh: 150"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mt-2.5">
                  {[50, 100, 250, 500, 1000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => {
                        setSelectedPackageId('pkg-custom');
                        setCustomAmount(preset);
                      }}
                      className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-200 hover:border-blue-500 rounded text-slate-700 hover:text-blue-700 transition-colors"
                    >
                      +RM {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary pill */}
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs">
                <span className="text-blue-900 font-medium">Jumlah Terpilih Untuk Infaq:</span>
                <span className="text-lg font-black text-[#002B66] font-mono">
                  RM {finalAmount.toLocaleString('ms-MY', { minimumFractionDigits: 2 })}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 bg-[#B91C1C] hover:bg-red-800 text-white font-extrabold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Seterusnya: Maklumat Penyumbang</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* STEP 2: Donor Information */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Nama Penuh Penyumbang:
                </label>
                <input
                  type="text"
                  disabled={isAnonymous}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Ahmad Razif bin Zakaria"
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-100 disabled:text-slate-400"
                />
              </div>

              {/* Anonymous checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="anon-check"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                />
                <label htmlFor="anon-check" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  Sumbang sebagai "Hamba Allah" (Nama disorok daripada paparan umum)
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Alamat Emel (Untuk E-Resit & Sijil):
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    No. Telefon (WhatsApp):
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="012-3456789"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Nota Niat / Doa Ikhlas (Akan Dipaparkan di Dinding Doa):
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Contoh: Semoga anak-anak SEMESTA cemerlang dalam bidang sains & teknologi demi agama dan negara..."
                  className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 border border-slate-300 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <ArrowLeft size={15} />
                  <span>Kembali</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 py-3.5 bg-[#B91C1C] hover:bg-red-800 text-white font-extrabold text-sm rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  <span>Pilih Saluran Pembayaran (RM {finalAmount})</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Method Selection & Checkout */}
          {step === 3 && (
            <div className="space-y-5">
              {/* Payment Methods Tabs */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Pilih Saluran Pembayaran Rasmi
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('fpx')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                      paymentMethod === 'fpx'
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Building size={20} className={paymentMethod === 'fpx' ? 'text-blue-600' : 'text-slate-400'} />
                    <span className="text-xs">FPX Perbankan</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('duitnow')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                      paymentMethod === 'duitnow'
                        ? 'border-pink-600 bg-pink-50 text-pink-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <QrCode size={20} className={paymentMethod === 'duitnow' ? 'text-pink-600' : 'text-slate-400'} />
                    <span className="text-xs">DuitNow QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                      paymentMethod === 'card'
                        ? 'border-amber-600 bg-amber-50 text-amber-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <CreditCard size={20} className={paymentMethod === 'card' ? 'text-amber-600' : 'text-slate-400'} />
                    <span className="text-xs">Kad Debit/Kredit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank_transfer')}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                      paymentMethod === 'bank_transfer'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Copy size={20} className={paymentMethod === 'bank_transfer' ? 'text-emerald-600' : 'text-slate-400'} />
                    <span className="text-xs">Pindahan Bank</span>
                  </button>
                </div>
              </div>

              {/* Sub-view: FPX */}
              {paymentMethod === 'fpx' && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">Pilih Bank Anda:</span>
                    <span className="text-[11px] text-slate-500">FPX Online Banking B2C</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {MALAYSIAN_BANKS.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setSelectedBank(b.id)}
                        className={`p-2.5 rounded-lg border text-left text-xs transition-all ${
                          selectedBank === b.id
                            ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-sm'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-500 pt-1">
                    Anda akan dihubungkan terus ke gerbang perbankan selamat rasmi bank anda untuk pengesahan TAC/OTP.
                  </p>
                </div>
              )}

              {/* Sub-view: DuitNow QR */}
              {paymentMethod === 'duitnow' && (
                <div className="bg-pink-50/50 p-4 rounded-xl border border-pink-200 text-center space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-800 bg-pink-100 px-3 py-1 rounded-full">
                    <span>DuitNow QR Kebangsaan</span>
                  </div>
                  
                  {/* Generated QR Box */}
                  <div className="mx-auto w-48 h-48 bg-white p-3 rounded-2xl border-2 border-pink-500 shadow-md flex flex-col items-center justify-center relative">
                    <QrCode size={140} className="text-slate-900" />
                    <div className="absolute inset-x-0 bottom-1 text-[9px] font-bold text-pink-600">
                      ASTA TRADITION DANA
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-600 block">
                      Imbas menggunakan mana-mana aplikasi Bank atau E-Wallet (TnG, GrabPay, Boost, Maybank MAE, dll.)
                    </span>
                    <span className="text-sm font-black text-slate-900 font-mono mt-1 block">
                      Jumlah Tepat: RM {finalAmount.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              {/* Sub-view: Kad Debit/Kredit */}
              {paymentMethod === 'card' && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Nombor Kad:</label>
                    <input
                      type="text"
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="4111 2222 3333 4444"
                      className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Tarikh Luput:</label>
                      <input
                        type="text"
                        maxLength={5}
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">CVV / CVC:</label>
                      <input
                        type="password"
                        maxLength={4}
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                        placeholder="123"
                        className="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    <span>Dilindungi dengan pengesahan 3D-Secure Visa & MasterCard</span>
                  </div>
                </div>
              )}

              {/* Sub-view: Pindahan Bank Manual */}
              {paymentMethod === 'bank_transfer' && (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600">
                    Anda boleh melakukan pindahan segera secara online (DuitNow Transfer/IBG) ke akaun rasmi jawatankuasa berikut:
                  </p>
                  {BANK_ACCOUNTS.map((bank, idx) => (
                    <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[#002B66]">{bank.bankName}</span>
                        <span className="text-[10px] bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-bold">
                          Akaun Rasmi
                        </span>
                      </div>
                      <div className="text-slate-600 font-medium">{bank.accountName}</div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200">
                        <span className="font-mono font-bold text-sm text-slate-900">{bank.accountNumber}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyAcc(bank.accountNumber, idx)}
                          className="px-2.5 py-1 bg-white border border-slate-300 hover:bg-slate-100 rounded text-slate-700 font-semibold flex items-center gap-1"
                        >
                          {copiedBankIndex === idx ? (
                            <>
                              <Check size={12} className="text-emerald-600" />
                              <span className="text-emerald-600">Disalin</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Salin</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Receipt Attachment Simulation */}
                  <div className="p-3 bg-amber-50/50 border border-dashed border-amber-300 rounded-xl text-center">
                    <input
                      type="file"
                      id="receipt-file"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setUploadedReceipt(e.target.files[0].name);
                        }
                      }}
                    />
                    <label htmlFor="receipt-file" className="cursor-pointer block text-xs text-slate-700">
                      <UploadCloud size={20} className="mx-auto text-amber-600 mb-1" />
                      {uploadedReceipt ? (
                        <span className="font-bold text-emerald-700 flex items-center justify-center gap-1">
                          <CheckCircle size={14} /> Resit Dilampirkan: {uploadedReceipt}
                        </span>
                      ) : (
                        <span>Muat naik salinan slip transaksi / resit pindahan (Pilihan)</span>
                      )}
                    </label>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-3 border border-slate-300 text-slate-700 font-semibold text-xs rounded-xl hover:bg-slate-50 flex items-center gap-1.5"
                >
                  <ArrowLeft size={15} />
                  <span>Kembali</span>
                </button>
                <button
                  type="button"
                  onClick={handleProcessPayment}
                  className="flex-1 py-3.5 bg-[#B91C1C] hover:bg-red-800 text-white font-extrabold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Heart size={16} className="text-amber-300 fill-amber-300" />
                  <span>Sahkan & Bayar RM {finalAmount.toLocaleString('ms-MY')}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Processing Animation */}
          {step === 4 && (
            <div className="py-12 text-center space-y-4">
              <div className="relative mx-auto w-16 h-16">
                <div className="w-16 h-16 rounded-full border-4 border-slate-200 border-t-[#B91C1C] animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShieldCheck size={24} className="text-emerald-600" />
                </div>
              </div>

              <div>
                <h4 className="text-lg font-black text-slate-900">
                  Menghubungkan ke Gerbang Pembayaran Selamat...
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Sila tunggu sebentar sementara transaksi anda disahkan oleh sistem perbankan dan resit rasmi dijana.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

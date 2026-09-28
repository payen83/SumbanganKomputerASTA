import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyHelpSection } from './components/WhyHelpSection';
import { PackageSelector } from './components/PackageSelector';
import { BudgetBreakdown } from './components/BudgetBreakdown';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { SecurePaymentModal } from './components/SecurePaymentModal';
import { OfficialReceiptModal } from './components/OfficialReceiptModal';
import { INITIAL_COLLECTED, INITIAL_DONORS, CAMPAIGN_TARGET } from './data/campaignData';
import { Donor } from './types';
import { Heart, Sparkles, QrCode } from 'lucide-react';

export default function App() {
  const [collectedAmount, setCollectedAmount] = useState<number>(INITIAL_COLLECTED);
  const [donorCount, setDonorCount] = useState<number>(482);
  const [donors, setDonors] = useState<Donor[]>(INITIAL_DONORS);
  
  // Modals state
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('pkg-infaq-ikhlas');
  
  // Receipt data
  const [receiptData, setReceiptData] = useState<{
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
  } | null>(null);

  const handleOpenDonateModal = (packageId?: string) => {
    if (packageId) {
      setSelectedPackageId(packageId);
    }
    setIsDonateModalOpen(true);
  };

  const handleDonationSuccess = (newDonation: {
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
  }) => {
    // Update live collected amount & donors
    setCollectedAmount((prev) => prev + newDonation.amount);
    setDonorCount((prev) => prev + 1);

    const newDonorEntry: Donor = {
      id: `donor-${Date.now()}`,
      name: newDonation.name,
      amount: newDonation.amount,
      date: 'Baru sebentar tadi',
      packageType: newDonation.packageType,
      message: newDonation.message,
      isAnonymous: newDonation.isAnonymous,
    };

    setDonors((prev) => [newDonorEntry, ...prev]);

    // Show official receipt modal
    setReceiptData(newDonation);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-amber-300 selection:text-slate-950">
      {/* Sticky Navbar */}
      <Navbar
        onOpenDonateModal={() => handleOpenDonateModal()}
        collectedAmount={collectedAmount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with Live Counter & Interactive Poster Replica */}
        <Hero
          collectedAmount={collectedAmount}
          donorCount={donorCount}
          onOpenDonateModal={() => handleOpenDonateModal()}
          onSelectPackage={(pkgId) => handleOpenDonateModal(pkgId)}
        />

        {/* Why Help / Context Section */}
        <WhyHelpSection />

        {/* Package Selector */}
        <PackageSelector
          onSelectPackage={(pkgId) => handleOpenDonateModal(pkgId)}
          onOpenDonateModal={() => handleOpenDonateModal()}
        />

        {/* Itemized Budget Breakdown (RM 110,935.00) */}
        <BudgetBreakdown onOpenDonateModal={() => handleOpenDonateModal()} />

        {/* Testimonials from Teachers, Students & Alumni */}
        <TestimonialsSection onOpenDonateModal={() => handleOpenDonateModal()} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer with contacts (Shamsudin Muhamad & Nasriq Ahmad) */}
      <Footer onOpenDonateModal={() => handleOpenDonateModal()} />

      {/* Mobile Sticky Floating CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 sm:hidden flex items-center justify-between gap-3 shadow-lg">
        <div className="leading-tight">
          <span className="text-[10px] text-slate-500 block uppercase font-bold">Terkumpul (Live):</span>
          <span className="text-sm font-black text-[#002B66] font-mono">
            RM {collectedAmount.toLocaleString('ms-MY')}
          </span>
        </div>
        <button
          onClick={() => handleOpenDonateModal()}
          className="flex-1 py-3 px-4 bg-[#B91C1C] text-white font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5"
        >
          <Heart size={15} className="text-amber-300 fill-amber-300" />
          <span>Sumbang Sekarang</span>
        </button>
      </div>

      {/* Multi-Step Secure Payment Gateway Modal */}
      <SecurePaymentModal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        initialPackageId={selectedPackageId}
        onDonationSuccess={handleDonationSuccess}
      />

      {/* Official Verified E-Receipt & E-Certificate Modal */}
      <OfficialReceiptModal
        receiptData={receiptData}
        onClose={() => setReceiptData(null)}
      />
    </div>
  );
}

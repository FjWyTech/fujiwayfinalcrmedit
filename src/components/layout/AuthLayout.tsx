'use client';

import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#F5F6FA] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-[#0066FF]">
            MetronicCloud
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8">
          {children}
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-[#677788]">
            Protected by reCAPTCHA and subject to the{' '}
            <Link href="/privacy" className="text-[#0066FF] hover:underline">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms" className="text-[#0066FF] hover:underline">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout; 
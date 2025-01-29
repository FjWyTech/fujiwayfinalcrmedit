import Link from 'next/link'

export default function VerifyEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="bg-card p-8 rounded-lg shadow-sm border">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-2">
              Check Your Email
            </h1>
            <p className="text-muted-foreground">
              We've sent you a verification link to your email address.
              Please click the link to verify your account.
            </p>
          </div>

          <div className="text-center">
            <Link 
              href="/auth/signin"
              className="text-primary hover:text-primary/90"
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 
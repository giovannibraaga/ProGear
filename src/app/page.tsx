import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom">
      <div className="flex flex-col items-center justify-center bg-[#16535b] p-8 rounded-lg shadow-md w-80">
        <Image
          src="/images/logo.png"
          alt="Logo da empresa ProGear"
          width={350}
          height={350}
        />
        <p className="text-xl mb-8 text-white">Dashboard ProGear</p>
        <Link href="/login">
          <button
            type="button"
            className="bg-[#0A2529] hover:bg-[#3a757c] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Entrar
          </button>
        </Link>
      </div>
    </div>
  );
}


import Image from "next/image";

export default function Loader({ isLoaded }: { isLoaded: boolean }) {


  if (isLoaded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50 animate-fade-out">
        <div className="text-center text-white animate-bounce">
          <div className="text-2xl font-bold mb-4">
            ¡Listo para despegar! 🚀
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col fixed  h-screen w-full bg-black  justify-center items-center">
      <div>
        <Image src={"/logo.webp"} width={600} height={600} alt="logo" />
      </div>
      <div>
        <p className="text-white text-6xl text-center">Preparando todo para vos</p>
      </div>
    </div>
  );
}

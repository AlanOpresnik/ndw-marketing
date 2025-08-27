import { Mail, Users, Sparkles } from "lucide-react"

export default function TeamRecruitment() {
  return (
    <section className="!py-16 !px-4 !mt-12 bg-gradient-to-br ">
      <div className="">
        <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl !p-8 md:!p-12 border border-slate-700/50 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>

          <div className="relative z-10 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>

            {/* Main heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Te gustaría formar parte del{" "}
              <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
                equipo?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-slate-300 text-lg md:text-xl !mb-8 max-w-2xl !mx-auto leading-relaxed">
              Si te entusiasma el mundo digital y sos creativ@, <br className="hidden md:block" />
              envianos tu CV y portfolio a:
            </p>

            {/* Email section */}
            <div className="bg-slate-700/50 rounded-2xl !p-6 md:!p-8 border border-slate-600/50 !mb-8">
              <div className="flex items-center justify-center gap-3 !mb-4">
                <div className="!p-2 bg-gradient-to-br from-blue-500 to-orange-500 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <Sparkles className="w-5 h-5 text-orange-400" />
              </div>

              <a
                href="mailto:ndw.agencia@gmail.com"
                className="text-2xl md:text-3xl font-bold text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-orange-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 inline-block"
              >
                ndw.agencia@gmail.com
              </a>
            </div>

            {/* Call to action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:ndw.agencia@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-orange-500 text-white !px-8 !py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Enviar CV y Portfolio
              </a>

              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>¡Únete a nuestro equipo creativo!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

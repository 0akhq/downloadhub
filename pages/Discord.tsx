import { motion } from "motion/react"

function Discord() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground px-6 pt-32 pb-20">

      {/* Arka plan glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="absolute left-[10%] top-[50%] h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[130px]" />

        <div className="absolute right-[10%] top-[40%] h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">

        {/* Başlık */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
          }}
          className="mb-10 text-center"
        >
          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Discord <span className="text-accent">Sunucumuz</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Topluluğumuza katıl, güncel programları takip et ve diğer
            kullanıcılarla iletişim kur.
          </p>
        </motion.div>

        {/* Discord Widget */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="w-full max-w-[350px]"
        >
          <iframe
            src="https://discord.com/widget?id=1537188898936066118&theme=dark"
            width="350"
            height="500"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className="
              relative
              z-20
              w-full
              rounded-2xl
              border
              border-white/10
              shadow-2xl
            "
          />
        </motion.div>

        {/* Katıl butonu */}
        <motion.a
          href="https://discord.gg/NhXvKckdmN"
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
          }}
          whileHover={{
            scale: 1.03,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            mt-7
            flex
            w-full
            max-w-[350px]
            items-center
            justify-center
            rounded-xl
            border
            border-accent/10
            bg-accent/5
            px-4
            py-3
            text-sm
            font-bold
            text-accent
            transition-all
            duration-300
            hover:bg-accent/10
            hover:shadow-lg
            hover:shadow-accent/10
          "
        >
          Discord Sunucusuna Katıl ↗
        </motion.a>

      </div>
    </main>
  )
}

export default Discord
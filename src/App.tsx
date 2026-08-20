import { useEffect, useState } from "react"
import { TextAnimate } from "@/components/ui/text-animate"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "motion/react"
import { DownloadBackground } from "@/components/ui/download-background"

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const { scrollYProgress } = useViewportScroll()

  const heroFade = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0]
  )

  const backgroundMove = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, 100]
  )

  const floatY = useSpring(0, {
    stiffness: 80,
    damping: 20,
  })

  const floatX = useSpring(0, {
    stiffness: 60,
    damping: 20,
  })

  const floatYHalf = useTransform(
    floatY,
    (value) => value * 0.5
  )

  const floatXThird = useTransform(
    floatX,
    (value) => value * 0.3
  )

  const floatYThird = useTransform(
    floatY,
    (value) => value * 0.3
  )

  const floatXFifth = useTransform(
    floatX,
    (value) => value * 0.2
  )

  useEffect(() => {
    floatY.set(-10)
    floatX.set(5)
  }, [floatY, floatX])

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors relative overflow-hidden">

      <div className="absolute inset-0 -z-50 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(var(--accent-rgb), 0.08) 0%,
              rgba(var(--primary-rgb), 0.05) 50%,
              rgba(var(--accent-rgb), 0.08) 100%
            )`,
            backgroundSize: "300% 300%",
            animation: "gradientShift 20s ease infinite",
          }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to bottom,
              rgba(var(--background-rgb), 0.7) 0%,
              rgba(var(--background-rgb), 0.3) 100%
            )`,
          }}
        />
      </div>

      <DownloadBackground />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16 pb-24">

        <div className="pointer-events-none absolute inset-0 -z-10">

          <motion.div
            className="
              absolute
              left-1/2
              top-[-250px]
              h-[650px]
              w-[650px]
              -translate-x-1/2
              rounded-full
              bg-violet-600/10
              blur-[150px]
              float
            "
            style={{
              y: backgroundMove,
              x: floatX,
              opacity: heroFade,
            }}
          />

          <motion.div
            className="
              absolute
              left-[5%]
              top-[40%]
              h-[350px]
              w-[350px]
              rounded-full
              bg-purple-600/5
              blur-[130px]
              float
            "
            style={{
              y: floatYHalf,
              x: floatXThird,
            }}
          />

          <motion.div
            className="
              absolute
              right-[5%]
              top-[55%]
              h-[300px]
              w-[300px]
              rounded-full
              bg-indigo-500/5
              blur-[120px]
              float
            "
            style={{
              y: floatYThird,
              x: floatXFifth,
            }}
          />
        </div>

        <motion.div
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.2,
            },
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-200px",
          }}
        >
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="
              mb-6
              inline-flex
              rounded-full
              border
              border-violet-400/20
              bg-violet-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-violet-300
              hover-lift
            "
          >
            ✦ Hızlı • Sade • Modern
          </TextAnimate>

          <motion.h1
            className="
              text-5xl
              font-bold
              tracking-[-0.05em]
              sm:text-6xl
              md:text-7xl
              text-background
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-accent
              to-primary
              hover-lift
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
              },
            }}
          >
            İhtiyacın olan yazılım,
          </motion.h1>

          <motion.h1
            className="
              mt-2
              text-5xl
              font-bold
              tracking-[-0.05em]
              text-accent
              sm:text-6xl
              md:text-7xl
              hover-lift
            "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.6,
              },
            }}
          >
            tek yerde.
          </motion.h1>
        </motion.div>
      </section>

      <motion.div
  initial={{ opacity: 0, y: 25, scale: 0.95 }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
  className="mx-auto mt-8 max-w-sm"
>
  <a
    href="https://discord.com/users/709426260497137785"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group
      flex
      items-center
      gap-4
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      p-4
      text-left
      no-underline
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-purple-400/30
      hover:bg-white/[0.06]
      hover:shadow-[0_10px_40px_rgba(168,85,247,0.12)]
    "
  >
    <img
  src="https://i.pinimg.com/1200x/31/a5/27/31a5279811c56a9d3da2c517036c4d82.jpg"
  alt="0akh"
  className="
    h-14
    w-14
    shrink-0
    rounded-full
    object-cover
    ring-2
    ring-purple-400/20
    transition-all
    duration-300
    group-hover:ring-purple-400/50
    group-hover:scale-105
  "
/>

    <div className="min-w-0">
      <p className="mb-0 text-sm font-semibold text-white">
        !     sudo apt install discrd
      </p>

      <p className="mb-0 text-xs text-white/40">
        Discord
      </p>
    </div>

    <span className="
      ml-auto
      text-lg
      text-white/30
      transition-all
      duration-300
      group-hover:translate-x-1
      group-hover:text-purple-400
    ">
      ↗
    </span>
  </a>
</motion.div>

              <motion.div
  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mb-6"
>
  <TextAnimate
    animation="blurInUp"
    by="character"
    className="
      text-5xl
      sm:text-6xl
      md:text-7xl
      font-black
      tracking-[-0.05em]
      bg-gradient-to-r
      from-pink-400
      via-purple-400
      via-blue-400
      to-cyan-400
      bg-[length:200%_auto]
      bg-clip-text
      text-transparent
      animate-gradient-x
      drop-shadow-[0_0_30px_rgba(168,85,247,0.25)]
    "
  >
    Yapımcı: 0akh
  </TextAnimate>
</motion.div>
      <section className="relative min-h-screen px-6 py-32">

        <motion.div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-32
            -translate-x-1/2
            select-none
            whitespace-nowrap
            text-[18vw]
            font-black
            uppercase
            tracking-[-0.08em]
            text-muted/5
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 0.02,
            y: 0,
            transition: {
              duration: 1.2,
            },
          }}
          style={{
            transform: `translateX(-50%) translateY(${scrollY * 0.08}px)`,
          }}
        >
          SOFTWARE
        </motion.div>

        <div className="relative z-10 mx-auto max-w-6xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
              },
            }}
          >
            <TextAnimate
              animation="blurInUp"
              by="word"
              className="text-4xl font-bold md:text-5xl text-accent/80"
            >
              Popüler Programlar
            </TextAnimate>

            <p className="mt-4 max-w-xl text-muted-foreground">
              İhtiyacın olan yaratıcı araçlara hızlıca ulaş.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
              },
            }}
          >
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">

              <SoftwareCard
                icon="Ae"
                title="After Effects 2026"
                version="Adobe • Güncel sürüm"
                delay={0}
                url="https://bzzhr.to/uuiu8aol7zpz"
              />

              <SoftwareCard
                icon="Ae"
                title="After Effects 2025.6"
                version="Adobe • Önceki sürüm"
                delay={50}
                url="https://bzzhr.to/20s3e37me47a"
              />

              <SoftwareCard
                icon="Ae"
                title="After Effects 2024.4"
                version="Adobe • Eski sürüm"
                delay={100}
                url="https://bzzhr.to/iptvfjz21gbu"
              />

              <SoftwareCard
                icon="Ae"
                title="After Effects 2023"
                version="Adobe • Eski sürüm"
                delay={150}
                url="https://bzzhr.to/x06gw1phzxw6"
              />

              <SoftwareCard
                icon="Ae"
                title="After Effects 2021"
                version="Adobe • Eski sürüm"
                delay={200}
                url="https://bzzhr.to/52qjr9v4mfo1"
              />

              <SoftwareCard
                icon="Pr"
                title="Premiere Pro 2026"
                version="Adobe • Güncel sürüm"
                delay={250}
                url="https://bzzhr.to/czgq15hqk56s"
              />

              <SoftwareCard
                icon="Pr"
                title="Premiere Pro 2025.5"
                version="Adobe • Güncel sürüm"
                delay={300}
                url="https://bzzhr.to/a9l6uqtmht30"
              />

              <SoftwareCard
                icon="Pr"
                title="Premiere Pro 2024"
                version="Adobe • Eski sürüm"
                delay={350}
                url="https://bzzhr.to/03mweir8qock"
              />

              <SoftwareCard
                icon="St"
                title="Speech to Text 2026"
                version="Adobe • Güncel sürüm"
                delay={400}
                url="https://bzzhr.to/juiwlnb07ayk"
              />

              <SoftwareCard
                icon="St"
                title="Speech to Text 2025"
                version="Adobe • Eski sürüm"
                delay={450}
                url="https://bzzhr.to/6f1j0p8iujgx"
              />

              <SoftwareCard
                icon="Me"
                title="Media Encoder 2026"
                version="Adobe • Güncel sürüm"
                delay={500}
                url="https://bzzhr.to/3pkudyhilc1j"
              />

              <SoftwareCard
                icon="Me"
                title="Media Encoder 2025.6"
                version="Adobe • Güncel sürüm"
                delay={550}
                url="https://bzzhr.to/ksm9fih746x1"
              />

              <SoftwareCard
                icon="Me"
                title="Media Encoder 2024"
                version="Adobe • Eski sürüm"
                delay={600}
                url="https://bzzhr.to/crbx8in1fc2o"
              />

              <SoftwareCard
                icon="Me"
                title="Media Encoder 2023"
                version="Adobe • Eski sürüm"
                delay={650}
                url="https://bzzhr.to/tri52an6t776"
              />

              <SoftwareCard
                icon="Me"
                title="Media Encoder 2021"
                version="Adobe • Eski sürüm"
                delay={700}
                url="https://bzzhr.to/2rc8k4w6ceer"
              />

              <SoftwareCard
                icon="Me"
                title="Media Encoder 2020"
                version="Adobe • Eski sürüm"
                delay={750}
                url="https://bzzhr.to/1utlttzeudap"
              />

              <SoftwareCard
                icon="Ps"
                title="Photoshop 2026"
                version="Adobe • Güncel sürüm"
                delay={800}
                url="https://bzzhr.to/aiij69viodlj"
              />

              <SoftwareCard
                icon="Ps"
                title="Photoshop 2025"
                version="Adobe • Güncel sürüm"
                delay={850}
                url="https://bzzhr.to/lgkxhiseo1af"
              />

              <SoftwareCard
                icon="Ps"
                title="Photoshop 2024"
                version="Adobe • Eski sürüm"
                delay={900}
                url="https://bzzhr.to/6bgkk54t858z"
              />

              <SoftwareCard
                icon="Tv"
                title="Topaz Video Activator v2"
                version="Topaz Labs • Permanently activated"
                delay={950}
                url="https://bzzhr.to/w3n37ltqd04f"
              />

              <SoftwareCard
                icon="Tp"
                title="Topaz Photo Activator v2"
                version="Topaz Labs • Permanently activated"
                delay={1000}
                url="https://bzzhr.to/cvm4lytmtizx"
              />

              <SoftwareCard
                icon="Tg"
                title="Topaz Gigapixel Activator v2"
                version="Topaz Labs • Permanently activated"
                delay={1050}
                url="https://bzzhr.to/rb3bz0ujoe2z"
              />

            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 py-16">
        <div className="relative z-10 mx-auto max-w-6xl">
          <TextAnimate
            animation="blurInUp"
            by="word"
            className="text-4xl font-bold md:text-5xl text-accent/80"
          >
            Popüler After Effect Pluginleri
          </TextAnimate>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <SoftwareCard
              icon="Ae"
              title="Sapphire Plugin"
              version="Güncel Sürüm"
              delay={1050}
              url=""
            />
            <SoftwareCard
              icon="Ae"
              title="BCC Plugin"
              version="Güncel Sürüm"
              delay={1100}
              url=""
            />
            <SoftwareCard
              icon="Ae"
              title="Flow"
              version="Güncel Sürüm"
              delay={1100}
              url=""
            />
          </div>
        </div>
      </section>

      <div className="relative z-50 mx-auto mt-12 flex w-full max-w-[350px] flex-col items-center">
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          Discord Sunucumuz
        </h1>

        <iframe
          src="https://discord.com/widget?id=1537188898936066118&theme=dark"
          width="350"
          height="500"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          className="relative z-20 rounded-2xl border border-white/10 shadow-2xl"
        />

        <motion.a
          href="https://discord.gg/NhXvKckdmN"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative
            mt-7
            flex
            w-full
            items-center
            justify-center
            rounded-xl
            bg-accent/5
            px-4
            py-3
            text-sm
            font-bold
            text-accent
            transition-all
            duration-300
            hover:bg-accent/10
            hover-lift
          "
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          Discord Sunucusuna Katıl ↗
        </motion.a>
      </div>


      <footer
        className="
          border-t
          border-accent/20
          px-6
          py-8
          text-center
          text-sm
          text-muted-foreground
          relative
          overflow-hidden
        "
      >
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div
            className="
              h-0.5
              w-full
              bg-gradient-to-r
              from-accent
              to-primary
              animate-gradientShift
            "
          />
        </div>

        © 2026 DownloadHub
      </footer>

    </main>
  )
}

function SoftwareCard({
  icon,
  title,
  version,
  delay,
  url,
}: {
  icon: string
  title: string
  version: string
  delay: number
  url: string
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay / 1000,
        },
      }}
      whileHover={{
        scale: 1.02,
        y: -4,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        },
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-card/20
        bg-card/5
        p-6
        backdrop-blur-lg
        hover-lift
        transition-all
        duration-500
        hover:border-accent/30
        hover:bg-card/10
        hover:shadow-lg
        hover:shadow-accent/20
      "
    >

      <div
        className="
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-accent/10
          blur-3xl
          transition-all
          duration-700
          group-hover:scale-150
          group-hover:bg-accent/20
        "
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle at center,
              rgba(var(--accent-rgb), 0.15) 0%,
              transparent 70%
            )`,
          }}
        />
      </div>

      <motion.div
        className="
          relative
          grid
          h-14
          w-14
          place-items-center
          rounded-2xl
          border
          border-accent/20
          bg-accent/5
          text-xl
          font-black
          text-accent
          transition-transform
          duration-500
          group-hover:rotate-6
          group-hover:scale-110
          hover-lift
        "
      >
        {icon}
      </motion.div>

      <h3 className="relative mt-6 text-xl font-bold text-foreground">
        {title}
      </h3>

      <p className="relative mt-2 text-sm text-muted-foreground">
        {version}
      </p>

      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          mt-7
          flex
          w-full
          items-center
          justify-center
          rounded-xl
          bg-accent/5
          px-4
          py-3
          text-sm
          font-bold
          text-accent
          transition-all
          duration-300
          hover:bg-accent/10
          hover-lift
        "
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.98,
        }}
      >
        Resmi sayfaya git ↗
      </motion.a>

    </motion.article>
  )
}

export default App

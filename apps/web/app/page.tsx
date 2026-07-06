export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <section className="max-w-3xl text-center px-6">
        <h1 className="text-6xl font-extrabold tracking-tight">
          Legoo
        </h1>

        <p className="mt-6 text-2xl text-zinc-300">
          Watch together.
          <br />
          Chat together.
          <br />
          Never watch alone.
        </p>

        <p className="mt-8 text-lg text-zinc-400">
          Connect with friends, create watch parties,
          and enjoy every movie and show together in real time.
        </p>

        <button className="mt-10 rounded-full bg-violet-600 px-8 py-4 text-lg font-semibold transition hover:bg-violet-700">
          Get Started
        </button>
      </section>
    </main>
  );
}
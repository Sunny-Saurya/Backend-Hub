const Heading = () => {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-10 pt-20 text-center sm:pt-28">
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#FFB88C]">
        The IdeasRoom journal
      </p>
      <h1 className="font-serif text-4xl leading-tight tracking-tight text-white sm:text-6xl">
        Stories, thoughts and reflections
        <span className="block text-[#d3d3d3]">about design &amp; development</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
        Practical ideas, creative experiments, and lessons from building things
        for the web.
      </p>
    </section>
  )
}
export default Heading
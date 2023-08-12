import ActionButton from "../common/ActionButton";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center my-auto">
      <div className="text-center space-y-6">
        <h4 className="text-lg tracking-widest">HELLO</h4>
        <div>
          <h1 className="text-4xl mb-2">
            I'm Bhone Aung Kyaw,{" "}
            <span className="text-pink-600">Full-stack Developer.</span>
          </h1>
          <h1 className="text-3xl md:text-4xl opacity-50">
            From Yangon, Myanmar
          </h1>
        </div>
        <h4 className="text-base md:text-lg uppercase tracking-normal sm:tracking-wide md:tracking-wider">
          I make great things using react and Node
        </h4>
        <ActionButton />
      </div>
    </section>
  );
}

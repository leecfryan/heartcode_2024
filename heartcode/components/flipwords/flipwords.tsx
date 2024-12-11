import { FlipWords } from "../ui/flip-words";
export function FlipWordsDemo() {
  const words = ["Megan", "Cheyenne"];
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mb-0 font-normal text-neutral-600 dark:text-neutral-400">
        Meet
        <FlipWords words={words} />!
      </div>
    </div>
  );
}
export default FlipWordsDemo;

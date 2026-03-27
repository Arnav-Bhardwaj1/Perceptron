import Image from "next/image";

export const ConversationsView = () => {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center bg-muted/50 dark:bg-transparent">
      <div className="flex flex-col items-center gap-y-4">
        <div className="rounded-2xl border border-white/15 dark:border-white/15 bg-white/5 p-3 shadow-lg dark:shadow-[0_0_20px_-5px_rgba(249,115,22,0.2)]">
          <Image alt="Logo" height={48} width={48} src="/logo.svg" />
        </div>
        <p className="text-2xl font-semibold">Perceptron</p>
      </div>
    </div>
  );
};
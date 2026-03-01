import Image from "next/image";

export const ConversationsView = () => {
  return (
    <div className="flex h-full w-full flex-1 items-center justify-center bg-muted">
      <div className="flex flex-col items-center gap-y-4">
        <Image alt="Logo" height={60} width={60} src="/logo.svg" />
        <p className="text-2xl font-semibold">Perceptron</p>
      </div>
    </div>
  );
};
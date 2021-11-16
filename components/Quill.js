import Image from "next/image"

const quillImage = ({ src, width, quality }) => {
  return `${src}?w=${width}&q={quality || 100}`
}

const Quill = () => {
  return (
    <a
      href="https://app.quill.chat/channelInvite?channel=6963833831209492034&invitingUser=7877407620135788575&nonce=7972168835541777317"
      target="_blank"
    >
      <div
        className="rounded-2xl bg-white pl-4 pr-8 py-2 text-gray-900 font-semibold text-xl flex items-center border-gray-200 border hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
      >
        <Image
          loader={quillImage}
          src="/quill.webp"
          alt="Quill app icon"
          width={64}
          height={64}
        />
        Chat on Quill
      </div>
    </a>
  );
};

export default Quill;
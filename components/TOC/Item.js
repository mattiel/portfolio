import clsx from 'clsx'

const Item = ({ section, isTiny }) => {
  const listClass = clsx(
    'inline-flex h-full items-center relative text-gray-500 transition-all overflow-hidden w-full',
    section.isVisible && 'text-gray-900 font-semibold',
    (isTiny && section.isVisible) && 'h-full',
    (isTiny && !section.isVisible) && 'h-0 max-h-0',
    !isTiny && 'max-w-[23%]',
  )

  return (
    <li className={listClass}>
      <a 
        href={`#${section.id}`}
        className="text-sm pr-4 z-10"
      >
        {section.title}
      </a>
    </li>
  )
}
export default Item
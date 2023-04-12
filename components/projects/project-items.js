import Link from 'next/link';

export default function ProjectItem({data}) {
  const title = data.properties.이름.title.map((title) => title.plain_text);
  const githubLink = data.properties.Github.url;
  const url = data.url;
  return (
    <Link
      href={url}
      legacyBehavior>
      <div className='p-6 m-3 bg-slate-400 rounded-md'>
        <h1>{title}</h1>
        <a href={githubLink}>깃허브 바로가기</a>
      </div>
    </Link>
  );
}

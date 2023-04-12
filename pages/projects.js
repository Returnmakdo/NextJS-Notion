import Layout from '@/components/Layout';
import ProjectItem from '@/components/projects/project-items';
import Head from 'next/head';
import {TOKEN, DATABASE_ID} from '@/config';

export default function Projects({projects}) {
  return (
    <Layout>
      <Head>
        <title>My Blog</title>
        <meta
          name='description'
          content='myblog'></meta>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      {projects.results.map((aProject) => (
        <ProjectItem
          key={aProject.id}
          data={aProject}
        />
      ))}
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: '이름',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

  const projects = await res.json();

  return {
    props: {projects},
  };
}

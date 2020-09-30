import React from 'react';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import fetch from '../../libs/fetch'
import Card from '../../components/Card/Card';

export default function Characters({ character }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      { character && <Card {...character} /> }
    </div>
  )
}

interface Character {
  id:string,
  name:string,
  status:string,
  species:string,
  type:string,
  gender:string,
  origin:string,
  location:string,
  image:string,
  episode:string,
  url:string,
  created: string
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "125" } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { id } = params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character:Character = await res;
  return {
    props: {
      character,
    }
  }
}

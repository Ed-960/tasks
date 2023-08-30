'use client';

import { useState } from 'react';
import useSWR from 'swr';

import styles from './page.module.css';

import { fetchOnePost } from '@/libs/fetchOnePost';

const ComponentOne = () => {
  const { data: data1 } = useSWR('custom_key_1', fetchOnePost);
  //...some logic

  return data1 ? (
    <div className={styles.card}>
      <h2>{data1.title}</h2>
      <p>{data1.body}</p>
      <span>ComponentOne</span>
    </div>
  ) : (
    <div>...Loading ComponentOne</div>
  );
};

const ComponentTwo = () => {
  const { data: data2 } = useSWR('custom_key_2', () =>
    fetchOnePost({ delayMS: 2000 })
  );
  //...some logic

  return data2 ? (
    <div className={styles.card}>
      <h2>{data2.title}</h2>
      <p>{data2.body}</p>
      <span>ComponentTwo</span>
    </div>
  ) : null; // Do not show loading state for ComponentTwo
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ComponentOne />
        <ComponentTwo /> {/* Render ComponentTwo immediately */}
      </div>
    </main>
  );
}

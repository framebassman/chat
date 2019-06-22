import React from 'react';
import { YMInitializer } from 'react-yandex-metrika';
import { isProd } from './environment';

interface YandexMetricaProps {
  accounts: number[]
}

export const YandexMetrica = (props: YandexMetricaProps) => {
  if (isProd()) {
    return (
      <YMInitializer 
        accounts={props.accounts}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true,
        }}
        version="2"
      />
    )
  } else {
    return (<div style={{display: 'none'}} />);
  }
}

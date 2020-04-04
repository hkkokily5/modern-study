import React from 'react';
import Interior from '../components/Interior';
import PageTemplate from '../components/PageTemplate';

const CafeZonePage = () => {
  return (
    <PageTemplate>
      <Interior
        title="카페 존"
        image="/assets/custom/rooms/cafezone.jpg"
        category="카페 존"
        usage="여담을 즐기는 곳"
        allowance="20명"
      />
    </PageTemplate>
  );
};

export default CafeZonePage;

import React from 'react';
import Interior from '../components/Interior';
import PageTemplate from '../components/PageTemplate';

const PrivacyRoomPage = () => {
  return (
    <PageTemplate>
      <Interior
        title="1인 집중실"
        image="/assets/custom/rooms/privacyroom.jpg"
        category="공부 존"
        usage="공부하는 곳"
        allowance="1명"
      />
    </PageTemplate>
  );
};

export default PrivacyRoomPage;

import React from 'react';
import PageTemplate from '../components/PageTemplate';
import Interior from '../components/Interior';

const StudyRoomPage = () => {
  return (
    <PageTemplate>
      <Interior
        title="스터디 룸"
        image="/assets/custom/rooms/studyroom.jpg"
        category="공부 존"
        usage="공부하는 곳"
        allowance="20명"
      />
    </PageTemplate>
  );
};

export default StudyRoomPage;

import React from 'react';
import PageTemplate from '../components/PageTemplate';
import Interior from '../components/Interior';

const StudyZonePage = () => {
  return (
    <PageTemplate>
      <Interior
        title="스터디 존"
        image="/assets/custom/rooms/studyzone.jpg"
        category="공부 존"
        usage="공부하는 곳"
        allowance="8명"
      />
    </PageTemplate>
  );
};

export default StudyZonePage;

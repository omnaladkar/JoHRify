import React from 'react'

import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Job from './Job';
import Alert from './Alert';
import Wrapper from '../assets/wrappers/JobsContainer';
import PageBtnContainer from './PageBtnContainer';

export const GlobalJobs = () => {

    const {
        globaljobs,
      
        jobs,
        isLoading,
        page,
        totalJobs,
        status,
        sort,
        numOfPages,
        showAlert,
      } = useAppContext();
      useEffect(() => {
        globaljobs();
        // eslint-disable-next-line
      }, [page, status, sort]);
      if (isLoading) {
        return <Loading center />;
      }
      if (jobs.length === 0) {
        return (
          <Wrapper>
            <h2>No jobs to display...</h2>
          </Wrapper>
        );
      }
    
  return (
    <Wrapper>
    {showAlert && <Alert />}
    <h5>
      {totalJobs} job{jobs.length > 1 && 's'} found
    </h5>
    <div className='jobs'>
      {jobs.map((job) => {
        return <Job key={job._id} {...job} />;
      })}
    </div>
    {numOfPages > 1 && <PageBtnContainer />}
  </Wrapper>
  )
}
export default GlobalJobs



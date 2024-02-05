import { useEffect } from 'react';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { increaseCurrentDuration } from '../features/workhour/workhourSlice';

// // server base url
// import { serverUrl } from '../data/serverUrl';

// hook
import useAxios from './useAxios';

const useWorkhoursProcess = () => {
  const dispatch = useDispatch();
  const { workhourData } = useSelector(store => store.workhour);
  const { profileData } = useSelector(store => store.auth);
  const { axiosCustom } = useAxios();

  // count the current duration
  useEffect(() => {
    let timer;
    if (workhourData.working) {
      timer = setTimeout(() => {
        dispatch(increaseCurrentDuration());
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
      timer = null;
    };
  }, [workhourData.working, workhourData.currentDuration, dispatch]);

  // save current workhour data if the page is closed/hidden
  useEffect(() => {
    const profileExists = !!profileData;

    // function for collecting data to save before leaving website
    const saveWorkhourData = () => {
      if (profileExists && workhourData.startedWorkAt) {
        const data = {
          employeeId: profileData?._id,
          currentWorkhourId: workhourData?._id,
          lastCurrentDuration: workhourData?.currentDuration,
          leftPageAt: new Date(),
        };

        if (document.visibilityState === 'hidden') {
          localStorage.setItem('employeeData', JSON.stringify(data));
          axiosCustom.patch('/workhours/tempUpdate', data);
        }
      }
    };

    window.addEventListener('visibilitychange', saveWorkhourData);

    return () => {
      window.removeEventListener('visibilitychange', saveWorkhourData);
    };
  }, [profileData, workhourData, axiosCustom]);
};

export default useWorkhoursProcess;

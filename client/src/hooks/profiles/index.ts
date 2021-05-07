import { useContext } from 'react';
import { ProfileContext } from 'src/contexts';

const useProfileState = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfileState must be used within a ProfileManagementProvider');
  }
  return context;
};

export default useProfileState;

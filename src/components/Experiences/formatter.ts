import { experiencesData } from './experiences';

export const getOrganizations = () => experiencesData?.map((experience) => Object.keys(experience)).flat();

export const getExperienceDetails = (orgName: string) =>
  experiencesData?.flatMap((experience) =>
    Object.entries(experience)
      .flatMap(([key, value]) => (key === orgName ? value : null))
      .filter((ele) => ele !== null)
  );

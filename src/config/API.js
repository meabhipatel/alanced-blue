const API = {
  Auth: {
    Login: "/account/login",
  },

  Freelancers: {
    Freelancer: {
      FreelancerRegistration: '/account/freelancer/registration',
      FreelancerSelfProfileView: '/account/freelancer/selfprofile/view',
      FreelancerViewReviews:'/freelance/View-all/Review',
      ViewAllProjects: '/freelance/view-all/Project',
      UpdateFreelancerProfile: '/account/freelancer/profile/update',
      AddBidAmount: '/freelance/Add/bid'
      // SavedUnsavedJobs:'/freelance/saved-projects',
      // ViewAllSavedJobs:'/freelance/View-all/SavedProjects'
    }
  },
  
  Hirers: {
    Hirer: {
      HirerRegistration: '/account/hirer/registration',
      ViewAllFreelancers:'/account/freelancer/profile/view-all',
    }
  }
};


export default API;
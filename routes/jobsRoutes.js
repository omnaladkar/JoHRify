import express from 'express';
const router = express.Router();

import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats,
  allJobs,
} from '../controllers/jobsController.js';

import testUser from '../middleware/testUser.js';


router.route('/alljobs').get(allJobs)
router.route('/').post(testUser, createJob).get(getAllJobs);

// remember about :id
router.route('/stats').get(showStats);
router.route('/:id').delete(testUser, deleteJob).patch(testUser, updateJob);

export default router;

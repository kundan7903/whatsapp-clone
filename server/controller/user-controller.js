
// api call hai okkk 

import User from '../model/User.js';


export const addUser = async (request, response) => {

    try {
        let exist = await User.findOne({ sub: request.body.sub })
        // agar ye mil jata hai db me tab matlab hua ki login user hai 

        if (exist) {
            response.status(200).json({
                msg: 'user alreaady exist' // ye frontetn pe dikane ke liye json body me se d
            });
            return;
        }
        // agar nii exist karta hai matlab new user hai okk
        const newUser = new User(request.body);
        // to store in db of new user data ;
        await newUser.save();
        return response.status(200).json(newUser);  // opject return ho raha hai 
    }
    catch (error) {
        return response.status(500).json(error.message);
    }


}


// get ke liye data frontent pe okkh 




export const getUsers = async (request, response) => {
    try {
        const users = await User.find({}); // sara data chaiye isliye hm isko empty behj rahe hai okk
        return response.status(200).json(users);
        // response matlab ye data frontetn pe ja raha hai okk 
    }
    catch (error) {
        return response.status(500).json(error.message);
    }
}

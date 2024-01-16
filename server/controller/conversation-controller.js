
import conversation from "../model/conversation.js";
// import conversation from "../model/conversation.js"

// route -> newconversation -> conversation jo ki model me hai and model kaha lekar jayega 
// db se intraction karygea
export const newConversation = async(request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await conversation.findOne({ members: { $all: [receiverId, senderId] } })
        // iska matlab all me jitne vii hai sare match karne chaiye 

        if (exist) {
            return response.status(200).json('conversation already exist');
        }

        // if not exist okk then 

        const newConversation = new conversation({
            members: [senderId, receiverId]
        })
        // db me save kara liya
       await newConversation.save();

        return response.status(200).json('conversation saved')

    }
    catch (error) {
        return response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {
    try {
        const conversations = await conversation.findOne({ members: { $all: [ request.body.senderId, request.body.receiverId] }});
        response.status(200).json(conversations);
    } catch (error) {
        response.status(500).json(error);
    }

}
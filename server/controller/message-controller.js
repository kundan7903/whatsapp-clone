
import message from "../model/message.js"
import conversation from "../model/conversation.js";

// converaton ko isliye import kar rahe taki message save ho db me phir update vii kar de 

export const newMessage = async (request, response) => {
    try {
        const newMessage = new message(request.body);

        await newMessage.save();
        await conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text });
        return response.status(200).json('Message has been sent successufully ')
    }
    catch (error) {
        return response.status(500).json(error.message)
    }
}





export const getMessages = async (request,response) => {
    try {
        const messages = await message.find({conversationId:request.params.id}); // message ko find karne keliye id se 

        return response.status(200).json(messages);
    }
    catch (error) {
        return response.status(500).json(error.message);
    }
}
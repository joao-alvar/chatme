import {messages} from '@/mock/data/db'
import ChatBubble from './chat-bubble'

const MessageContainer = () => {
  return (
    <div className="relative h-full flex-1 overflow-auto bg-chat-tile-light p-3 dark:bg-chat-tile-dark">
      <div className="mx-12 flex h-full flex-col gap-3">
        {messages?.map((msg, idx) => (
          <div key={msg._id}>
            <ChatBubble />
          </div>
        ))}
      </div>
    </div>
  )
}
export default MessageContainer

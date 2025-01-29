'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, MoreVertical, Send, Paperclip, Phone, Video } from 'lucide-react'

const contacts = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://picsum.photos/200/200?random=1',
    status: 'online',
    lastMessage: 'Hey, how are you?',
    time: '2m ago',
    unread: 2,
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://picsum.photos/200/200?random=2',
    status: 'offline',
    lastMessage: 'The project looks great!',
    time: '1h ago',
    unread: 0,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    avatar: 'https://picsum.photos/200/200?random=3',
    status: 'online',
    lastMessage: 'Can we schedule a meeting?',
    time: '3h ago',
    unread: 1,
  },
]

const messages = [
  {
    id: 1,
    senderId: 1,
    text: 'Hey, how are you?',
    time: '10:00 AM',
  },
  {
    id: 2,
    senderId: 'me',
    text: 'I\'m good, thanks! How about you?',
    time: '10:02 AM',
  },
  {
    id: 3,
    senderId: 1,
    text: 'Doing great! Just wanted to check about the project progress.',
    time: '10:03 AM',
  },
  {
    id: 4,
    senderId: 'me',
    text: 'Sure! We\'re on track. I\'ve completed the design phase and starting with development next week.',
    time: '10:05 AM',
  },
]

export default function ChatPage() {
  const [selectedContact, setSelectedContact] = useState(contacts[0])

  return (
    <div className="flex h-[calc(100vh-76px)] -mt-6 -mx-6 bg-white">
      {/* Contacts Sidebar */}
      <div className="w-80 border-r border-[#E9ECEF] flex flex-col">
        <div className="p-4 border-b border-[#E9ECEF]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search contacts..."
              className="w-full pl-10 pr-4 py-2 bg-[#F8F9FA] rounded-lg text-[#333333] focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6C757D]" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-[#F8F9FA] ${
                selectedContact.id === contact.id ? 'bg-[#F8F9FA]' : ''
              }`}
            >
              <div className="relative">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={contact.avatar}
                    alt={contact.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                }`} />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-medium text-[#333333]">{contact.name}</h3>
                <p className="text-sm text-[#6C757D] truncate">{contact.lastMessage}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6C757D]">{contact.time}</p>
                {contact.unread > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-[#0D6EFD] text-white text-xs rounded-full">
                    {contact.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-[72px] px-6 flex items-center justify-between border-b border-[#E9ECEF]">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={selectedContact.avatar}
                alt={selectedContact.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-medium text-[#333333]">{selectedContact.name}</h2>
              <p className="text-sm text-[#6C757D]">{selectedContact.status}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-[#F8F9FA] rounded-lg text-[#6C757D]">
              <Phone className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#F8F9FA] rounded-lg text-[#6C757D]">
              <Video className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-[#F8F9FA] rounded-lg text-[#6C757D]">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${
                message.senderId === 'me'
                  ? 'bg-[#0D6EFD] text-white rounded-l-lg rounded-tr-lg'
                  : 'bg-[#F8F9FA] text-[#333333] rounded-r-lg rounded-tl-lg'
              } px-4 py-2`}>
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.senderId === 'me' ? 'text-blue-100' : 'text-[#6C757D]'
                }`}>{message.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-[#E9ECEF]">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-[#F8F9FA] rounded-lg text-[#6C757D]">
              <Paperclip className="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-[#F8F9FA] rounded-lg text-[#333333] focus:outline-none"
            />
            <button className="p-2 bg-[#0D6EFD] hover:bg-blue-600 rounded-lg text-white">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 
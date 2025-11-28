"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, Users, Award, Send } from "lucide-react"

interface Message {
  id: number
  author: string
  avatar: string
  skill: string
  content: string
  timestamp: string
}

interface Room {
  id: number
  name: string
  icon: string
  description: string
  members: number
}

const chatRooms: Room[] = [
  {
    id: 1,
    name: "Macramé & Weaving",
    icon: "🪡",
    description: "Share macramé techniques, patterns, and creations.",
    members: 342,
  },
  {
    id: 2,
    name: "Leathercraft",
    icon: "👜",
    description: "Discuss leather stitching, bag-making, and accessories.",
    members: 218,
  },
  {
    id: 3,
    name: "Jewelry & Beading",
    icon: "💎",
    description: "Exchange beading patterns and jewelry design tips.",
    members: 456,
  },
  {
    id: 4,
    name: "Sewing & Tailoring",
    icon: "👗",
    description: "Learn dress-making, patchwork, and garment construction.",
    members: 389,
  },
  {
    id: 5,
    name: "Upcycling & Sustainability",
    icon: "♻️",
    description: "Share sustainable crafting ideas and fabric scraps reuse.",
    members: 267,
  },
  {
    id: 6,
    name: "Marketplace Tips",
    icon: "🛍️",
    description: "Business tips for selling handmade products online.",
    members: 512,
  },
]

const sampleMessages: Message[] = [
  {
    id: 1,
    author: "Sarah M.",
    avatar: "SM",
    skill: "Leathercraft",
    content: "Just finished my first hand-stitched leather bag! So excited to share it.",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    author: "Alex K.",
    avatar: "AK",
    skill: "Macramé",
    content: "Does anyone have tips for creating even knots? I'm still practicing.",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    author: "Maya R.",
    avatar: "MR",
    skill: "Jewelry",
    content: "Loving the new bead patterns! Who wants to collaborate on a collection?",
    timestamp: "30 minutes ago",
  },
]

export default function ConnectPage() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [messageInput, setMessageInput] = useState("")

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessageInput("")
    }
  }

  return (
    <div className="py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Sulong Connect</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Join our community of artisans and craftspeople. Chat, learn, and
          share your skills with others passionate about handmade products.
        </p>
      </header>

      {/* Login Prompt */}
      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700">
          <strong>👋 Welcome!</strong> To join the conversation, please{" "}
          <Link href="/login" className="text-cyan-700 underline font-medium">
            log in to your account
          </Link>
          {" "}or{" "}
          <Link href="/signup" className="text-cyan-700 underline font-medium">
            create one
          </Link>
          . Once logged in, you'll be able to chat, share your work, and learn from our
          community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Rooms */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <MessageCircle className="w-6 h-6" />
            Chat Rooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {chatRooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedRoom?.id === room.id
                    ? "border-cyan-700 bg-cyan-50"
                    : "border-gray-200 hover:border-cyan-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{room.icon}</span>
                  <div>
                    <h3 className="font-medium">{room.name}</h3>
                    <p className="text-sm text-gray-500">{room.description}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      <Users className="w-3 h-3 inline mr-1" />
                      {room.members} members
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Chat Window */}
          {selectedRoom && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{selectedRoom.name}</h3>
              <div className="border rounded-lg p-4 mb-4 bg-gray-50 h-80 overflow-y-auto">
                {sampleMessages.map((msg) => (
                  <div key={msg.id} className="mb-4 pb-4 border-b last:border-b-0">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-700 text-white flex items-center justify-center text-xs font-bold">
                        {msg.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{msg.author}</span>
                          <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-0.5 rounded">
                            {msg.skill}
                          </span>
                          <span className="text-xs text-gray-400">{msg.timestamp}</span>
                        </div>
                        <p className="text-gray-700 mt-1">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Share your thoughts or ask a question..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-cyan-700 text-white rounded-lg hover:bg-cyan-800 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Skills & Experts */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Top Skills
          </h2>
          <div className="space-y-3">
            {[
              { skill: "Macramé", experts: 45 },
              { skill: "Leathercraft", experts: 38 },
              { skill: "Jewelry Making", experts: 72 },
              { skill: "Sewing", experts: 91 },
              { skill: "Upcycling", experts: 34 },
              { skill: "Weaving", experts: 28 },
            ].map((item) => (
              <div
                key={item.skill}
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow cursor-pointer"
              >
                <p className="font-medium text-sm">{item.skill}</p>
                <p className="text-xs text-gray-500">{item.experts} experts</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Share Your Skills</h2>
          <div className="bg-linear-to-br from-cyan-700 to-cyan-900 text-white rounded-lg p-6">
            <p className="text-sm mb-4">
              Have expertise in a craft? Become a mentor and help others learn!
            </p>
            <button className="w-full px-4 py-2 bg-white text-cyan-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Join as Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
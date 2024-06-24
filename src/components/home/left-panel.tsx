import {ListFilter, LogOut, MessageSquareDiff, Search, User} from 'lucide-react'
import {Input} from '../ui/input'
import ThemeSwitch from './theme-switch'

const LeftPanel = () => {
  const conversations = []

  return (
    <div className="w-1/4 border-r border-gray-600">
      <div className="sticky top-0 z-10 bg-left-panel">
        {/* Header */}
        <div className="flex items-center justify-between bg-gray-primary p-3">
          <User size={24} />

          <div className="flex items-center gap-3">
            <MessageSquareDiff size={20} />{' '}
            {/* TODO: This line will be replaced with <UserListDialog /> */}
            <ThemeSwitch />
            <LogOut size={20} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center p-3">
          {/* Search */}
          <div className="relative mx-3 h-10 flex-1">
            <Search
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform text-gray-500"
              size={18}
            />
            <Input
              type="text"
              placeholder="Pesquisar ou iniciar conversa"
              className="w-full rounded bg-gray-primary py-2 pl-10 text-sm shadow-sm focus-visible:ring-transparent"
            />
          </div>
          <ListFilter className="cursor-pointer" />
        </div>
      </div>

      {/* Chat List */}
      <div className="my-3 flex max-h-[80%] flex-col gap-0 overflow-auto">
        {/* Conversations will go here*/}

        {conversations?.length === 0 && (
          <>
            <p className="mt-3 text-center text-sm text-gray-500">
              Nenhuma conversa ainda
            </p>
            <p className="mx-3 mt-3 text-center text-sm text-gray-500">
              Nós entendemos que {'você é'} um introvertido, mas {'você'} tem
              que começar de algum lugar 😊
            </p>
          </>
        )}
      </div>
    </div>
  )
}
export default LeftPanel

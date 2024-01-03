import React from 'react'

function Avatar() {
  return (
    <>
    <h1 className="text-center text-3xl bg-blue-500">Tailwind CSS + React</h1>

    <div className="avatar">
        <div className="w-24 rounded">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>


    <div className="avatar">
        <div className="w-24 rounded-xl">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>
    <div className="avatar">
        <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>

    <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>

    
    </>
  )
}

export default Avatar
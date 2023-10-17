import React from 'react'

export const Content = () => {
  return (
    <div className="container-fluid">
            <div className='row text-center'>
               <div className="col-2 border border-info">
                <aside className='col'>
                   <div >
                   Left
                    </div>
                </aside>
                </div>
                <div className="col-8 border border-info ">
                    <section>
                        Content
                    </section>
                </div>
                <div className="col-2 border border-info">
                    <article>
                       Right
                    </article>
                </div>
            </div>
        </div>
  )
}

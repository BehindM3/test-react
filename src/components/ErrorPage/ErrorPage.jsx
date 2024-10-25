import './ErrorPage.css'

function ErrorPage( { children } ) {
    
    return(
        <main className="ct-error">
            <img src="/sad.svg" alt="Emoji de error 400" />
            <h2>Error: <span className='numberError'>{children}</span></h2>
            
        </main>
    )
}

export default ErrorPage;
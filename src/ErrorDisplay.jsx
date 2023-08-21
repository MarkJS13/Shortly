const ErrorDisplay = (props) => {
    return (
        <div className={`error-display ${props.showError ? 'error-display-hide ' : ''}`}>
            <div className="container-error">
                <p> Request failed. Please input valid URL. </p>
            </div>
        </div>
    )
}

export default ErrorDisplay;
function LoggerUtils(logLevel: string) {
    //var console: any
    function log(level: string, message: string, args: any){
        console.log(level, message, args);
    }
    /**
     * console debug
     * @params message message to be logged
     * @params args optional arguments array
     * usage
     * LoggerUtils.debug('text', a)
     */
    function debug(message: string, args: any){
        if(logLevel === 'debug'){
            log("log", "DEBUG::"+ message, args);
        }
    }
     /**
     * console info
     * @params message message to be logged
     * @params args optional arguments array
     * usage
     * LoggerUtils.info('text', a)
     */
     function info(message: string, args: any){
        if(logLevel === 'debug' || logLevel === 'info'){
            log("info", "INFO::"+ message, args);
        }
    }
     /**
     * console warn
     * @params message message to be logged
     * @params args optional arguments array
     * usage
     * LoggerUtils.warn('text', a)
     */
     function warn(message: string, args: any){
        if(logLevel === 'debug' || logLevel === 'warn' || logLevel === 'info'){
            log("warn", "WARNING::"+ message, args);
        }
    }
    /**
     * console error
     * @params message message to be logged
     * @params args optional arguments array
     * usage
     * LoggerUtils.error('text', a)
     */
    function error(message: string, args: any){
        log("warn", "WARNING::"+ message, args);
    }


    return ({
        debug,
        info, 
        warn,
        error
    })
}

const LOG_LEVEL = 'debug';

const logger = LoggerUtils(process.env.LOG_LEVEL || LOG_LEVEL);

export {logger};
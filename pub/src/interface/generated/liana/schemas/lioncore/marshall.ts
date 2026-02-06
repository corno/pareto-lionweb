    
    import * as _pi from 'pareto-core/dist/interface'
    
    import * as i_out from "astn-core/dist/interface/generated/liana/schemas/sealed_target/data"
    
    import * as i_in from "./data"
    
    export namespace M3_ {
        
        export type I = i_in.M3
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type M3_ = (
        context: M3_.I,
    ) => M3_.O
    
    export namespace ID_ {
        
        export type I = i_in.ID
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type ID_ = (
        context: ID_.I,
    ) => ID_.O
    
    export namespace Raw_Reference_ {
        
        export type I = i_in.Raw_Reference
        
        export type O = i_out.Value
        
        export namespace P {
            
        }
        
    }
    
    export type Raw_Reference_ = (
        context: Raw_Reference_.I,
    ) => Raw_Reference_.O
    
    export { 
        M3_ as M3, 
        ID_ as ID, 
        Raw_Reference_ as Raw_Reference, 
    }

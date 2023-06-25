export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dates: {
        Row: {
          created_at: string | null
          date: string[] | null
          email: string
          id: number
          usual: number | null
        }
        Insert: {
          created_at?: string | null
          date?: string[] | null
          email: string
          id?: number
          usual?: number | null
        }
        Update: {
          created_at?: string | null
          date?: string[] | null
          email?: string
          id?: number
          usual?: number | null
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string
          username: string | null
        }
        Insert: {
          email: string
          username?: string | null
        }
        Update: {
          email?: string
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

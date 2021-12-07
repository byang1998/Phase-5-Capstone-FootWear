class ShoeSerializer < ActiveModel::Serializer
  attributes :id, :shoe_name, :user_id, :database_id
end

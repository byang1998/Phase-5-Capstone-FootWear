class LogSerializer < ActiveModel::Serializer
  attributes :id, :date, :entry, :shoe_id
end
